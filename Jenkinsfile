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
                bat 'ng build --configuration production'
            }
        }

        stage('Docker Build & Run') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t my-angular-app:latest .'

                echo 'Stopping old container if exists...'
                bat 'docker stop angular-container || echo Not running'
                bat 'docker rm angular-container || echo Not found'

                echo 'Running new container...'
                bat 'docker run -d -p 4200:80 --name angular-container my-angular-app:latest'
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD Pipeline SUCCESS'
            echo '🌐 Open: http://localhost:4200'
        }
        failure {
            echo '❌ CI/CD Pipeline FAILED'
        }
    }
}
