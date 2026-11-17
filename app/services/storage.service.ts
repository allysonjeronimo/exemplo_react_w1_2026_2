const ServiceStorage = {

    get<T>(key: string): T | null {

        const content = localStorage.getItem(key)

        if(content){
            return JSON.parse(content) as T
        }

        return null
    },

    set<T>(key: string, value: T): void{
        localStorage.setItem(key, JSON.stringify(value))
    },

    clear() : void {
        localStorage.clear()
    }

    // ServiceStorage.get<Todo[]>("todos")

    // ServiceStorage.set<Todo[]>("todos", todos)
}

export default ServiceStorage