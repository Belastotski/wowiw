class Wowiw{

    static count = 0;
    parent = document.body;
    isShow = () => this.style.display != 'none';
    wowiws = new Map();
    isActiv = () => !this.model.hasOwnProperty('disabled');

    constructor(){
        Wowiw.count++;
        this.idWindow = Wowiw.count;
        this.model = document.createElement('div');
        this.wowiws.set(this.idWindow,this);

    }

    render(setup){
        let wWowiw = document.createElement('div');
        wWowiw.style.padding = '1%';
        let wTitle = document.createElement('div');
        wTitle.style.marginBottom = '1%';
        let sTitle = document.createElement('spin');
        sTitle.innerText = this.title;
        // ------------------------ Close ----------------------------
        let bClose = document.createElement('spin');
        bClose.style.cssFloat ='right';
        if (this.style.closeButton) bClose.style.display = 'none';
        bClose.onclick = this.close();
        bClose.innerHTML = '&#215;&#160;';
        bClose.onmouseover = () => bClose.style.cursor = 'pointer';
        bClose.onmouseout = () =>  bClose.style.cursor = 'default';
        // ------------------------ Min ------------------------__----
        let bMin = document.createElement('spin');
        bMin.style.cssFloat ='right';
        if (this.style.closeButton) bMin.style.display = 'none';
        bMin.onclick = this.close();
        bMin.innerHTML = '&#128469;&#160;';
        bMin.onmouseover = () => bMin.style.cursor = 'pointer';
        bMin.onmouseout = () =>  bMin.style.cursor = 'default';
        // ------------------------ Reload ----------------------------
        let bRe = document.createElement('spin');
        bRe.style.cssFloat ='right';
        if (this.style.closeButton) bRe.style.display = 'none';
        bRe.onclick = this.close();
        bRe.innerHTML = '&#8635;&#160;';
        bRe.onmouseover = () => bRe.style.cursor = 'pointer';
        bRe.onmouseout = () =>  bRe.style.cursor = 'default';
        // ---------------------------------------------------------------
        return(`
<div id="w-content">Windows content</div> 
<button >Hello</button>
</div>
`)
    }

    mod(){
        this.model.innerHTML = this.render();
        for (let key in this.style)
            this.model.style[key] =  this.style[key];
    }

    show(){
        if (this.isShow()) return;
        console.log("work")
        let coord = this.parent.getBoundingClientRect();
        this.style.top =  coord.top  * 1.05* Wowiw.count + 10 + "px";
        this.style.left =  coord.left *1.05 *Wowiw.count + 10 + "px";
        this.title = 'New window ' + Wowiw.count;
        this.activ();
        this.mod();
        this.parent.appendChild(this.model);
    }

    close(){

    }

    activ(){
        this.style.zIndex = Wowiw.count + 2;
        this.style.display = 'block';
        this.isActiv = false;
        this.model.enabled = false;
    }

    hide(){
        this.style.zIndex = 1;
        this.style.display = 'none';
    }
    pass(){
        this.style.zIndex = this.idWindow;
    }


    style = {
        display: 'none',
        boxShadow: '1px 1px 2px 2px rgba(0, 0, 0, 0.12)',
        position: 'fixed',
        top: '10%',
        left: '10%',
        //border:  '1px solid black',
        background: 'white',
        maxHeight: '80%',
        width: '70vw',
        closeButton: true,
        maxButton: true,
        minButton: true,
        reButton: true // кнопка перегрузки
    }
}