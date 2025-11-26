pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/myra349/studentrecordsystem.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t student-frontend:latest .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker stop student-frontend || echo "Not Running"'
                bat 'docker rm student-frontend || echo "Not Available"'
                bat 'docker run -d -p 3000:80 --name student-frontend student-frontend:latest'
            }
        }
    }
}
