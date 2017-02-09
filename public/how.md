# MCA

# Upload
Upload MPD file to server.
``` sh
curl -i -X POST \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@./mpd.json" http://localhost/api/upload
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
# UAT