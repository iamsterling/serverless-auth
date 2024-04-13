interface Params {
    username: string,
    password: string
}


const handle = {
    username(username: string): boolean {
        return /^[a-zA-Z0-9_]{3,16}$/.test(username)
    },
    password(password: string): boolean {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    }
}

export const validate = ({ username, password }: Params): boolean => {
    
    //  ------------
    //  if(!handle.username(username) || !handle.password(password)) {
    //      console.error("username or password contains invalid characters")
    //      return false
    //  } else {
    //      console.log("Validation successful!")
    //      return true
    //  }

    return true
}