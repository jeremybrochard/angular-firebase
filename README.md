# Angular-Firebase

Simple Angular app with Firebase integration

> This project is **NOT** done (bugs can occurs).



Project generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.



## How to use



**Install all the NPM packages**

```shell
npm install
```



**Configure Firebase**

- Create a new Firebase Account (free accounts available)

- Create a new Firebase project

- Copy/paste your firebase configurations in the project

  - Go to the folder *src*

  - Create a new file called *firebase-config.ts*

  - Copy paste your conf like this :

    ```typescript
    export const FIREBASE_CONFIG: any = {
        apiKey: '<your-key>',
        authDomain: '<your-project-authdomain>',
        databaseURL: '<your-database-URL>',
        projectId: '<your-project-id>',
        storageBucket: '<your-storage-bucket>',
        messagingSenderId: '<your-messaging-sender-id>'
    }
    ```

  ​

**Run the project**

You can launch the project using the CLI serve command:

```shell
ng serve --open
```

