pipeline {
    agent any

    tools {
        nodejs "NodeJS-18.20.8"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/abdulrehman2557/DevOps-Project-CI-CD-pipeline-Angular.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                bat 'npm install'
            }
        }

        stage('Build Angular App') {
            steps {
                echo 'Building Angular project...'
                bat 'npx ng build --configuration production'
            }
        }

        stage('Docker Build & Run') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t my-angular-app:latest .'

                echo 'Removing old container if exists...'
                bat '''
                IF NOT "%ERRORLEVEL%"=="0" (
                    docker rm -f angular-container || echo "No container to remove"
                )
                '''

                echo 'Running new container...'
                bat 'docker run -d -p 4200:80 --name angular-container my-angular-app:latest'
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD Pipeline SUCCESS'
            echo '🌐 Open: http://localhost:4200'
            mail(
                to: 'abdulrehmanmubashir00001@gmail.com',
                subject: "✅ CI/CD Pipeline SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Hurray! The Jenkins pipeline for ${env.JOB_NAME} completed successfully.\nCheck console: ${env.BUILD_URL}"
            )
        }
        failure {
            echo '❌ CI/CD Pipeline FAILED'
            mail(
                to: 'abdulrehmanmubashir00001@gmail.com',
                subject: "❌ CI/CD Pipeline FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Oops! The Jenkins pipeline for ${env.JOB_NAME} failed.\nCheck console: ${env.BUILD_URL}"
            )
        }
    }
}
