// pipeline {
//     agent any
//     tools {
//         nodejs 'Node-22.6'
//         gradle 'gradle-8.10' // Replace 'gradle' with the exact name if different
//     }
//     stages {
//         stage("Run Frontend") {
//             steps {
//                 echo 'Executing yarn...'
//                 bat 'yarn install'
//             }
//         }
//         stage("Run Backend") {
//             steps {
//                 echo 'Executing Gradle...'
//                 bat 'gradlew.bat -v'
//             }
//         }
//     }
// }

pipeline {
    agent any

    tools {
        nodejs 'Node-22.6'
        gradle 'gradle-8.10' // Ensure 'gradle-8.10' matches the exact tool name configured in Jenkins
    }

    environment {
        VERCEL_TOKEN = credentials('Rahi12345') // ID of your Vercel token stored in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from version control...'
                git 'https://github.com/Rahichauhan/CyberHaakthon.git' // Replace with your actual repository URL
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                echo 'Installing frontend dependencies using yarn...'
                bat 'yarn install'
            }
        }

        stage('Build Frontend') {
            steps {
                echo 'Building the frontend...'
                bat 'yarn build'
            }
        }

        stage('Run Frontend Tests') {
            steps {
                echo 'Running frontend tests...'
                bat 'yarn test'
            }
        }

        stage('Run Backend') {
            steps {
                echo 'Running backend using Gradle...'
                bat './gradlew.bat build' // Ensure gradlew.bat is in the root directory, adjust the command if necessary
            }
        }

        stage('Run Backend Tests') {
            steps {
                echo 'Running backend tests...'
                bat './gradlew.bat test'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                echo 'Deploying to Vercel...'
                sh '''
                curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_jWtW9qtio51xgFYhJioGGDUXLvj5 \
                -H "Authorization: Bearer ${VERCEL_TOKEN}" \
                -d "{}"
                '''
            }
        }

        stage("Deploy Backend") {
            when {
                branch 'main' // Only deploy when on the 'main' branch
            }
            steps {
                echo 'Deploying the backend application...'
                // Add your backend deployment steps here
                bat './gradlew.bat deploy'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
            // Add success notification steps here, e.g., sending a Slack message or an email
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
            // Add failure notification or rollback steps here
        }
    }
}
