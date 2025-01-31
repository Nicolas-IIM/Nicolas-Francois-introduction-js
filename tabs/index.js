document.querySelectorAll('.tabs-nav li').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tabs-nav li').forEach(item => {
            item.classList.remove('tab-active');
        });

        document.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active');
            this.classList.add('tab-active');
            
        });        

        if (this.classList.contains('tab-contenue1')) {
            document.querySelector('.content:nth-child(2)').classList.add('active');
        } else if (this.classList.contains('tab-contenue2')) {
            document.querySelector('.content:nth-child(3)').classList.add('active');
        } else if (this.classList.contains('tab-contenue3')) {
            document.querySelector('.content:nth-child(4)').classList.add('active'); // .content:nth-child(4) avec l'aide de l'IA
        }
    });
});