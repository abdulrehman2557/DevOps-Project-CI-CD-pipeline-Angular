pipeline {
    agent any

    tools {
        nodejs "NodeJS-18.20.8" // Must match your NodeJS tool name
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/abdulrehman2557/DevOps-Project-CI-CD-pipeline-Angular.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Angular') {
            steps {
                bat 'ng build --configuration production'
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts 'dist/**'
            }
        }

        stage('Docker Build (Optional)') {
            steps {
                echo 'Docker deployment steps will be added later'
            }
        }
    }

    post {
        success {
            emailext (
                subject: "Build SUCCESS: ${currentBuild.fullDisplayName}",
                body: "The build was successful. Check artifacts at ${env.BUILD_URL}",
                to: "abdulrehmanmubashir00001@gmail.com"
            )
        }
        failure {
            emailext (
                subject: "Build FAILURE: ${currentBuild.fullDisplayName}",
                body: "The build failed. Check console output at ${env.BUILD_URL}",
                to: "abdulrehmanmubashir00001@gmail.com"
            )
        }
    }
}
