pipeline {
    agent any
    stages {
        stage("Run Frontend") {
            steps {
                echo 'Executing yarn...'
                nodejs('Node-18.15') {
                    // Use 'bat' for Windows instead of 'sh'
                    bat 'yarn install'
                }
            }
        }
        stage("Run Backend") {
            steps {
                echo 'Executing Gradle...'
                withGradle() {
                    // Use 'bat' for Windows instead of 'sh'
                    bat './gradlew -v'
                }
            }
        }
    }
}
