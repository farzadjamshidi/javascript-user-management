# javascript-user-management

## Tasks

### Task1

Create 2 pages, first authentication, second user list. Enter user with username: admin and password: admin then redirect to user list page.
User list page contains a table with these columns : username, firstName, lastName, nationalCode, birthDate, city, mobile, address, role and actions. Each row has 3 buttons as actions: delete, edit and change password.
For users use an array which contains objects of user. Sample users array:

var users = [
    {
        username:"fj68",
        firstName : "Farzad",
        lastName:"Jamshidi",
        nationalCode : "0001234567",
        birthDate:"21/09/1989",
        city:"Tehran",
        mobile:"09123456789",
        address :"Tehran Tehran",
        role:"admin"
    }
]