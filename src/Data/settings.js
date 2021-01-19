export const MENU = [
    {id: 0, name:'техника', link: 'technics', comp: 'Technics'},
    {id: 1, name:'документы', link: 'docs', comp: 'Docs'},
    {id: 2, name:'картриджи', link: 'carts', comp: 'Carts'},
    {id: 3, name:'справочники', link: 'libs', comp: 'Libs'}
];

export const SUBMENU  = {
    technics: [        
        {link: "osr", name: 'осн. ср-ва'},
        {link: "rsx", name: 'расходники'},
        {link: "rem", name: 'ремонт'},
        {link: "jrn", name: 'журнал'}
    ],
    docs: [
        {link: "pn", name: 'накладные'},
        {link: "act", name: 'акты'},
        {link: "jrn", name: 'журнал'}
    ],
    carts: [
        {link: "in", name: 'приход'},
        {link: "out", name: 'расход'},
        {link: "jrn", name: 'журнал'}
    ],
    libs: {}
}

export const SITETITLE = "Docz_2021"