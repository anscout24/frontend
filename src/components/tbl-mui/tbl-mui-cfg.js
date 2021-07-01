
const defaultStyleCfg = {align: 'center',  minWidth: 50}
const numFormat = {format: (value) =>
    {
        // parseInt(value).toLocaleString('de-DE', { maximumFractionDigits: 0 })
        if (value) {
            return parseInt(value).toLocaleString('de-DE', {maximumFractionDigits: 0})
        } else {
            return ""
        }
    }
}

const tblMainPropertyOptions = [ "HOUSE_BUY","HOUSE_RENT","APARTMENT_BUY", "APARTMENT_RENT" ]

const tblMainCol = [
    // { label: 'Id', field: 'listingId',...defaultStyleCfg, inputForm: "standard" },
    { label: 'Estate Type', field: 'realEstateType', ...defaultStyleCfg, inputForm:  "property", filter: true},
    { label: 'Street', field: 'street', ...defaultStyleCfg , inputForm:  "standard", filter: false},
    { label: 'Nr', field: 'houseNumber', ...defaultStyleCfg , inputForm:  "standard", filter: false},
    { label: 'Post Code', field: 'postcode', ...defaultStyleCfg , inputForm:  "standard", filter: false},
    { label: 'City', field: 'city',  ...defaultStyleCfg , inputForm:  "standard", filter: false},
    { label: 'Living Area', field: 'livingArea', ...defaultStyleCfg , inputForm:  "standard", filter: false},
    { label: 'Site Area', field: 'siteArea',  ...defaultStyleCfg  , inputForm:  "standard", filter: false},
    { label: 'Rental Price', field: 'rentalPrice',  ...defaultStyleCfg ,...numFormat, inputForm:  "standard" , filter: true },
    { label: 'Sales Price', field: 'salesPrice',  ...defaultStyleCfg ,...numFormat , inputForm:  "standard", filter: true},
    { label: 'Image URL', field: 'imageURL',  ...defaultStyleCfg  , inputForm:  "standard", filter: false},
]

export const MUI_TABLE_COLUMN_MAIN = tblMainCol;
export const MUI_TABLE_PROPERTY_OPTIONS = tblMainPropertyOptions;