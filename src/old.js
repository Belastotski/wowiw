class Wowiw{

    static count = 0;
    title = 'New window ' + this.count;
    parent = document.body;
    back = document.createElement('div');
    isShow = false;

    render(setup){
        return`
<div id="w-wowiw" style="border: 5px solid black">
<div id="w-title">$(this.title)</div>
<div id="w-content">Windows content</div> 
</div>
`
    }

    fback(){
        this.back.style.width = '100%';
        this.back.style.height = '100%';
        this.back.style.position = 'fixed';
        this.back.style.position.top = 0;
        this.back.style.left = 0;
        for (let key in this.style.back)
            this.back.style[key] =  this.style.back[key];
        if (this.style.back.disable) back.disabled;
        this.parent.appendChild(this.back);
    }
    model(){
        let model = document.createElement('div');
        model.innerHTML = this.render();
        model.style.position = 'absolute';
        for (let key in this.style)
            model.style[key] =  this.style[key];
        this.parent.appendChild(model);
    }

    show(){
        if (this.isShow) return;
        console.log(this.isShow);
        this.isShow = true;
        Wowiw.count++;
        this.idWindow = Wowiw.count;
        this.fback();
        this.model();
    }



    style = {
        margin: 'auto',
        background: 'white',
        hide: true,
//        height: '70vw',
        width: '70vw',
        closeButton: true,
        maxButton: false,
        minButton: false,
        reButton: false, // кнопка перегрузки
        modal: true, // модальное ли окно (остальыне недоступно)
        closeMode: 'back',
        back : {
            opacity: 0.5,
            backgroundColor: 'black',
            disable: false
        }
    }
}