
const defaultStyleCfg = {align: 'right',  minWidth: 50}
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
    { label: 'Id', field: 'listingId',...defaultStyleCfg, inputForm: "standard" },
    { label: 'Estate Type', field: 'realEstateType', ...defaultStyleCfg, inputForm:  "property"},
    { label: 'Street', field: 'street', ...defaultStyleCfg , inputForm:  "standard"},
    { label: 'Nr', field: 'houseNumber', ...defaultStyleCfg , inputForm:  "standard"},
    { label: 'Post Code', field: 'postcode', ...defaultStyleCfg , inputForm:  "standard"},
    { label: 'City', field: 'city',  ...defaultStyleCfg , inputForm:  "standard"},
    { label: 'Living Area', field: 'livingArea', ...defaultStyleCfg , inputForm:  "standard"},
    { label: 'Site Area', field: 'siteArea',  ...defaultStyleCfg  , inputForm:  "standard"},
    { label: 'Rental Price', field: 'rentalPrice',  ...defaultStyleCfg ,...numFormat, inputForm:  "standard"  },
    { label: 'Sales Price', field: 'salesPrice',  ...defaultStyleCfg ,...numFormat , inputForm:  "standard"},
    { label: 'Image URL', field: 'imageURL',  ...defaultStyleCfg  , inputForm:  "standard"},
]

export const MUI_TABLE_COLUMN_MAIN = tblMainCol;
export const MUI_TABLE_PROPERTY_OPTIONS = tblMainPropertyOptions;