# MCA

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
Upload uat test with 

```sh
curl -X POST -H "Content-Type: multipart/form-data" \
  -F "file=@cucumber0325.json" \
  "http://140.121.102.164:4000/api/test/uat"
```
