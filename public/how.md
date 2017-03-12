# MCA
## Project Setup

Must have in dependencies 
```groovy
//For Endpoint Information
compile('org.springframework.boot:spring-boot-starter-actuator')
//Service Test
compile group: 'au.com.dius', name: 'pact-jvm-consumer-junit_2.11', version: '3.3.6'
//Swagger
compile group: 'io.springfox', name: 'springfox-swagger2', version: '2.6.1'
//MCA Dependency
compile files('lib/mca-all.jar')
```
Example `build.gradle`
```groovy
buildscript {
	ext {
		springBootVersion = '1.5.2.RELEASE'
	}
	repositories {
		mavenCentral()
	}
	dependencies {
		classpath("org.springframework.boot:spring-boot-gradle-plugin:${springBootVersion}")
	}
}

apply plugin: 'java'
apply plugin: 'eclipse'
apply plugin: 'org.springframework.boot'

jar {
	baseName = 'user'
	version = '0.0.1-SNAPSHOT'
}

sourceCompatibility = 1.8

repositories {
	mavenCentral()
}


dependencies {
	compile('org.springframework.boot:spring-boot-starter-actuator')
	compile('org.springframework.cloud:spring-cloud-starter-eureka')
	compile('org.springframework.boot:spring-boot-starter-data-mongodb')
	compile('org.springframework.boot:spring-boot-starter-web')
	compile group: 'au.com.dius', name: 'pact-jvm-consumer-junit_2.11', version: '3.3.6'
	compile group: 'io.springfox', name: 'springfox-swagger2', version: '2.6.1'
	compile files('lib/mca-all.jar')
	compileOnly('org.projectlombok:lombok')
	testCompile('org.springframework.boot:spring-boot-starter-test')
}

dependencyManagement {
	imports {
		mavenBom "org.springframework.cloud:spring-cloud-dependencies:Camden.SR5"
	}
}

```
Example of Swagger Config`SwaggerConfig.java`.

Change the base package to suit your application.
```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("ntou.soselab.movie"))
                .paths(PathSelectors.any())
                .build();
    }
}
```
Example of the Mca in spring boot test
```java
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import soselab.easylearn.MCA.ProjectReader;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("mca")
public class MCATest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Value("${spring.application.name}")
    private String serviceName;

    // The package need to scan
    // private String packageName = "soselab.easyelarn";
    private String packageName = this.getClass().getPackage().getName();


    @Test
    public void test() {
        String mappingsJson = restTemplate.getForEntity("/mappings", String.class).getBody();
        String swaggerJson = restTemplate.getForEntity("/v2/api-docs", String.class).getBody();
        ProjectReader projectReader = new ProjectReader(serviceName, mappingsJson, swaggerJson, packageName);
        projectReader.execute();
    }
}
```

Must have property in `application-mca.yml`
```yml
spring:
  application:
    name: movie

endpoints:
  mappings:
    sensitive: false

eureka:
  client:
    enabled: false
```


## Upload
### Upload MPD file to server
After pass the Junit Test. The MPD file would generate at `<project folder>/build/mpd/mpd.json`. Upload the mpd file to `http://localhost:3500/api/upload`.

#### HTTP Request
Content-Type:
`multipart/form-data`

Form:

| Key | Value |
|-----|------|
| file | < path to the file >  |

Curl Example
``` sh
curl -i -X POST \
  -H "Content-Type: multipart/form-data" \
  -F "file=@./mpd.json" \
  http://localhost:3500/api/upload
```
### Upload Service Test File to server
After pass the Service Test. The json file would generate at `<project folder>/build/cucumber/cucumber.json`. Upload the mpd file to `http://localhost:3500/api/test/serviceTest`.
#### HTTP Request
Content-Type:
`multipart/form-data`

Form:

| Key | Value |
|-----|------|
| files | < path to the files >  |

Curl Example
``` sh
curl -X POST \
  -H "Content-Type: multipart/form-data" \
  -F "files=@easylearn_pack.md" \
  -F "files=@easylearn_test.md" \
  http://localhost:3500/api/test/serviceTest
```
### Upload MPD file to server
After pass the Service Test. The json file would generate at `<project folder>/build/cucumber/cucumber.json`. Upload the mpd file to `http://localhost:3500/api/test/uat`.
#### HTTP Request
Content-Type:
`multipart/form-data`

Form:

| Key | Value |
|-----|------|
| files | < path to the file >  |

Curl Example
``` sh
curl -i -X POST \
  -H "Content-Type: multipart/form-data" \
  -F "file=@./uat.json" \
  http://localhost:3500/api/test/uat
```

# Service Test
## Requirement
- Java 8
- `curl` command for rest call
- Gradle project

## Step
- Put the following content in `build.gradle` file in service test project.
- Configure the environment variable.
- Run with `./gradlew configure pactverify`

build.gradle
``` groovy
import groovy.json.JsonSlurper
plugins {
  id 'java'
  id "au.com.dius.pact" version "3.3.6"
}

ext{
  mgpUrl = "http://localhost:3000/test"
}

pact {
   reports {
      defaultReports() // adds the standard console output

      markdown // report in markdown format
      json // report in json format
    }
}

task configure() {
  def p = new URL(project.ext.mgpUrl).text
  println p
    
  def json = new JsonSlurper().parseText(p)
  // println json
  project.pact.serviceProviders{
    json.each{ provider ->
      "${provider.provider}"{
        host=System.getenv("${provider.host}")
        port=System.getenv("${provider.port}")
        provider.hasPactWith.each { consumer ->
          hasPactWith("${consumer.consumer}"){
            pactFile=url("${consumer.pactFile}")
          }
        }
      }    
    }
  println project.pact.serviceProviders
  }
}
```
Upload the service test results to mgp via this `curl` command
```sh
curl -X POST -H "Content-Type: multipart/form-data" \
  -F "files=@easylearn_pack.json" \
  -F "files=@easylearn_pack.md" \
  "http://localhost:8080/api/test/serviceTest"
```
# UAT

Glue setting in args need to be set to package name. See [Cucumber JVM Java Gradle Example](https://github.com/cucumber/cucumber-jvm/tree/master/examples/java-gradle).

Run with `./gradlew clean regression`
Run with `./gradlew clean rest`

The Test result will in `build/cucumber` folder.
```groovy
plugins {
    id "java"
}

group 'com.example'
version '1.0-SNAPSHOT'

sourceCompatibility = 1.8

repositories {
    mavenCentral()
}

dependencies {
    testCompile group: 'junit', name: 'junit', version: '4.11'
    compile group: 'org.seleniumhq.selenium', name: 'selenium-java', version: '3.0.1'
    compile group: 'info.cukes', name: 'cucumber-java', version: '1.2.5'
    compile group: 'info.cukes', name: 'cucumber-junit', version: '1.2.5'

}
configurations {
    cucumberRuntime {
        extendsFrom testRuntime
    }
}

task regression() {
    dependsOn assemble, compileTestJava
    doLast {
        def argsConfig = ['--plugin', 'html:output','--plugin', 'json:build/cucumber/cucumber.json','--plugin', 'pretty','--plugin', 'progress:build/cucumber/cucumber.txt','--plugin', 'usage:build/cucumber/usage.txt', '--glue', 'soselab.easylearn', 'src/test/resources']
        argsConfig.addAll(['--tags', '@easylearn_pack_endpoint_/_POST,@easylearn_pack_endpoint_/_GET'])
        println(argsConfig)
        javaexec {
            main = "cucumber.api.cli.Main"
            classpath = configurations.cucumberRuntime + sourceSets.main.output + sourceSets.test.output
            args = argsConfig
        }
    }
}

task rest() {
    dependsOn assemble, compileTestJava
    doLast {
        def argsConfig = ['--plugin', 'html:output','--plugin', 'json:build/cucumber/cucumber.json','--plugin', 'pretty','--plugin', 'progress:build/cucumber/cucumber.txt','--plugin', 'usage:build/cucumber/usage.txt', '--glue', 'soselab.easylearn', 'src/test/resources']
        argsConfig.addAll(['--tags', '~@easylearn_pack_endpoint_/_POST','--tags','~@easylearn_pack_endpoint_/_GET'])
        println(argsConfig)
        javaexec {
            main = "cucumber.api.cli.Main"
            classpath = configurations.cucumberRuntime + sourceSets.main.output + sourceSets.test.output
            args = argsConfig
        }
    }
}
```
Junit Runner
```java
@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty"})
public class RunCukesTest {

}
```
