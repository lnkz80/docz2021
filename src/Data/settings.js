export const MENU = [
    {id: 0, name:'техника', link: 'technics'},
    {id: 1, name:'документы', link: 'docs'},
    {id: 2, name:'картриджи', link: 'carts'},
    {id: 3, name:'справочники', link: 'libs'}
];

export const SUBMENU  = {
    technics: {        
        osr: 'основные средства',
        rsx: 'расходники',
        rem: 'ремонт',
        jrn: 'журнал'        
    },
    docs: {
        pn: 'накладные',
        act: 'акты',
        jrn: 'журнал'
    },
    carts: {
        in: 'приход',
        out: 'расход',
        jrn: 'журнал'
    },
    libs: {}
}