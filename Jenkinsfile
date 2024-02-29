pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/Mohammedsalman14/Nodejs-Express.git', branch: 'main', credentialsId: 'github-acc')
      }
    }

    stage('listing') {
      steps {
        sh 'ls -la'
      }
    }

  }
}