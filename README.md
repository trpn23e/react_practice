= Project Template For React Practice =

Intelli J 2017.1.6, JDK 1.8.0.161 64bit, Spring Boot 2.0.1 Release, Spring 5.0.5 Release

JMS Apache Active MQ, JPA, QueryDSL, React, Element UI

•Make root directory's name would be 'home' or possible to change anything you want but recommend to check realted configurations and settings

※ This repository's BackEnd, FrontEnd settings are similar to 'project_template' repository's setting
   it can be deleted if I think enough to learn to make professional react application
   if learning result is acceptable I would apply result to 'project_template' repository

   ================================================================================================================
   설치방법  
   
    1.아무 드라이브에 MYPROJ.zip을 그대로 압축해제, IntelliJ로 디렉토리 오픈
    
    2.Run/Debug Configuration에서 Gradle 추가 
    (
        &nbsp;&nbsp;Gradle project : home:project:subprj<br>
        &nbsp;&nbsp;Tasks : bootRun<br>
        &nbsp;&nbsp;Script parameters : --stacktrace <-- 해도되고 안해도됨
    )
    
     BackEnd 접속 URL : http://localhost:50000
     FrontEnd 접속 URL(React) : http://localhost:3000
     FrontEnd Server(Node JS Express) 접속 URL : http://localhost:5000
     
    
     ※ FrontEnd(React)쪽은 home\project\subprj\frontend\my-app이 루트 디렉토리임
        FrontEnd(Node JS Express) 쪽은 home\project\subprj\frontend\my-app\server이 루트 디렉토리임
        
    
     ※ 이 템플릿의 구조사상은 React --> Node JS Express 서버 요청 --> Spring BackEnd 요청의
        예를 보기 위함이다. FrontEnd(React)에서 npm run dev시 webpack devserver에 설정된
        proxy를 타고 FrontEnd Server(Node JS Express)로 접근하게 된다.
        Front, BackEnd 측 서버를 모두 구동 후
        http://localhost:3000으로 접속해서 'React>>Express>>BackEnd 서버요청' 버튼을 눌러보면
        React UI에서 Express -> Spring BackEnd쪽으로 로직이 흘러감을 볼 수 있다.
     
     ※ FrontEnd의 경우 각각(React, Express)의 package.json등의 내용이 다르므로 혼동하지 말것!
        (npm install도 따로 해줘야 함을 의미)
        
    
           (C:\MYPROJ\home\project\subprj\frontend\my-app 경로의 CMD창에서 
           npm install 후 (이미 설치된 node_module이 있기때문에 안해줘도 되지만 구동시
           모듈을 못찾아서 오류 발생하는 경우 한번 돌려준다)
           npm run dev, npm start등으로 구동시킴
        
           Node JS Express도 마찬가지로 C:\MYPROJ\home\project\subprj\frontend\my-app\server로
           이동해서 npm install 후 npm start로 구동시킴
           (React만 사용할꺼면 생략해도 된다.)
           
    
      *Node JS 설치되있어야 함
      
    
     3. 필요없는 모듈등은 적당히 삭제, 변경해서 사용하면 됨
        ex) frontend측 필요없을 경우 C:\MYPROJ\home\project\subprj\frontend 삭제