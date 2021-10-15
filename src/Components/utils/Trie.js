
function node(name, phone, info){
    this.name = name;
    this.phone = phone;
    this.info = info;
}

class Trie{

    constructor(){
        this.arr = Array(10);
        this.count = 0;
        this.arr.fill(null);
        this.child = null;
    }

    add(phone, name, info, root, position = 0){

        if(position === phone.length){

            if(root == null){
                root = new Trie();
            }
            // console.l
            root.child = new node(name, phone, info);
            let temp = JSON.parse(localStorage.getItem("root"));
            temp.push({...root.child});
            localStorage.setItem("root", JSON.stringify(temp));
            root.count+=1;
            return root;
        }

        if(root == null){
            root = new Trie();
        }
        let ch = phone[position]-'0';
        root.arr[ch] = this.add(phone, name, info, root.arr[ch], position+1);
        root.count+=1;
        return root;
    }

    delete(phone, root, position = 0){

        if(position === phone.length){
            root.count-=1;
            root.child = null;
            return;
        }
        let ch = phone[position]-'0';
        this.delete(phone, root.arr[ch], position+1);
    }

    getAll(root){

        if(root == null){
            return;
        }
        for(let i = 0; i <10; i++){
            this.getAll(root.arr[i])
        }
        if(root.child != null){
            console.log("Hello");
            this.res.push(root.child);
        }
    }

    getList(searchQuery, root, position = 0){

        if(position === searchQuery.length){
            this.res = []
            this.getAll(root);
            console.log(this.res);   
            return this.res;       
        }
        let ch = searchQuery[position]-'0';
        return this.getList(searchQuery, root.arr[ch], position+1)
    }
}

export {Trie}