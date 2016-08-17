export class UserService {
    users: Array<any> = [
        { Id: 1, FirstName: "User", LastName: "1", Gender: "Male", Age: 35, Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com" },
        { Id: 2, FirstName: "User", LastName: "2", Gender: "Female", Age: 24, Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com" },
        { Id: 3, FirstName: "User", LastName: "3", Gender: "Male", Age: 15, Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com" },
        { Id: 4, FirstName: "User", LastName: "4", Gender: "Female", Age: 75, Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com" },
        { Id: 5, FirstName: "User", LastName: "5", Gender: "Male", Age: 43, Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com" },
        // {Id: "6", FirstName: "User", LastName: "6", Gender: "Female", Age: "30", Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com"},
        // {Id: "7", FirstName: "User", LastName: "7", Gender: "Male", Age: "30", Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com"},
        // {Id: "8", FirstName: "User", LastName: "8", Gender: "Male", Age: "30", Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com"},
        // {Id: "9", FirstName: "User", LastName: "9", Gender: "Female", Age: "30", Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com"},
        // {Id: "10", FirstName: "User", LastName: "10", Gender: "Male", Age: "30", Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com"},
        // {Id: "11", FirstName: "User", LastName: "11", Gender: "Male", Age: "30", Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com"},
        // {Id: "12", FirstName: "User", LastName: "12", Gender: "Female", Age: "30", Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com"},
        // {Id: "13", FirstName: "User", LastName: "13", Gender: "Male", Age: "30", Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com"},
        // {Id: "14", FirstName: "User", LastName: "14", Gender: "Female", Age: "30", Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com"},
        // {Id: "15", FirstName: "User", LastName: "15", Gender: "Male", Age: "30", Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com"}
    ]
    public getListUsers(): Array<any> {
        return this.users;
    }

    public createNewUser(newUser: any) {
        newUser.Id = this.users.length + 1;
        this.users.concat(newUser);
    }
}