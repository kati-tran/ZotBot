export class FoodItem {
    public num;
    public name: string;
    public price: number;
    public allModifiers: string[];
    public appliedModifiers: string[];
    public quantity: number;

    constructor(itemNum,itemName,itemPrice,itemModifiers)
    {
        this.num = itemNum
        this.name=itemName
        this.price=itemPrice
        this.allModifiers = itemModifiers
        this.appliedModifiers = itemModifiers //Change later.
        this.quantity = 1
    }

    public appliedMods()
    {
        var modString = ""
        for (var i = 0; i < this.appliedModifiers.length; i++)
        {
            if (i != (this.appliedModifiers.length-1))
                modString = modString + this.appliedModifiers[i] + ", "
            else
                modString = modString + this.appliedModifiers[i]
        }

        return modString
    }

    public applyMod(modNum:number)
    {
        if (modNum < this.allModifiers.length)
        {
            if (!this.appliedModifiers.includes(this.allModifiers[modNum]))
                this.appliedModifiers.push(this.allModifiers[modNum])
        }
    }
    
    public incQuantity()
    {
        this.quantity++
    }

    public decQuantity()
    {
        if (this.quantity > 1)
            this.quantity--
    }

    public setQuantity(input)
    {
        var newQ = input.value;
        if (!isNaN(newQ) && newQ > 1)
            this.quantity = newQ
        else if (newQ == "" || newQ < 1)
            this.quantity = 1
    }
}