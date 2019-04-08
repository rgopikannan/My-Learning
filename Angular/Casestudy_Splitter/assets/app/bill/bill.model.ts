export class Bill {
    constructor(public desc: string,
                public amt: number,
                public billDate: number,
                public email: string,
                public userName: string,
                public userId: string,
                public paidByYou?: boolean,
                public splitEqually?: boolean
    ) {
    }
}