
const defaultStyleCfg = {align: 'right',  minWidth: 50}
const numFormat = {format: (value) =>value.toLocaleString('de-DE', { maximumFractionDigits: 0 })}

const tblMainCol = [
    { label: 'Id', field: 'listingId',...defaultStyleCfg },
    { label: 'Type', field: 'realEstateType', ...defaultStyleCfg},
    { label: 'Street', field: 'street', ...defaultStyleCfg },
    { label: 'Nr', field: 'houseNr', ...defaultStyleCfg, ...numFormat },
    { label: 'Post Code', field: 'postCode',editable:'never', ...defaultStyleCfg , ...numFormat},
    { label: 'City', field: 'city',editable:'never', ...defaultStyleCfg },
    { label: 'Living Area', field: 'livingArea',editable:'never', ...defaultStyleCfg },
    { label: 'Site Area', field: 'siteArea',editable:'never', ...defaultStyleCfg ,...numFormat  },
    { label: 'Rental Price', field: 'rentalPrice',editable:'never', ...defaultStyleCfg ,...numFormat  },
    { label: 'Sales Price', field: 'salesPrice',editable:'never', ...defaultStyleCfg ,...numFormat },
    { label: 'Image', field: 'imgUrl',editable:'never', ...defaultStyleCfg  },
]

export const MUI_TABLE_COLUMN_MAIN = tblMainCol;