const users = [
    {id: 1, name: "erfan yousefi", job: "developer", skill: "nodejs"},
    {id: 2, name: "ali yousefi", job: "frontend", skill: "reactjs"},
    {id: 3, name: "mhmmd yousefi", job: "backend", skill: "laravel"},
    {id: 4, name: "hassan", job: "trader", skill: "web3"},
    {id: 5, name: "hossein mohammadi", job: "developer", skill: "golang"},
    {id: 6, name: "Amir Ali", job: "mechanic", skill: "lox machine"},
];

export function getUsersFromDB() {
    return new Promise((resolve, reject) => {
        if(users.length > 0) resolve(users);
        else reject(new Error("not found any users"));
    })
}
export const SystemMessage = "Hello User welcome to my website."