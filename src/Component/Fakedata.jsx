export const SettingsDatas = [
    {
        "type": "Insta Subform", 
        "module": "Accounts",
        "field_api_name": "tab_01",
        "fields":[
            {
                "api_name": "Phone",
                "display_name": "Phone",
                "type": "phone",
                "default_value": ""
            },
            {
                "api_name": "Account_Name",
                "display_name": "Account Name",
                "type": "single_line",
                "default_value": ""
            }
            
        ]
    },
    {
        "type": "Subform", 
        "module": "Contacts",
        "field_api_name": "tab_02",
        "fields":[
            {
                "api_name": "Account_Name",
                "display_name": "Account Name",
                "type": "single_line",
                "default_value": ""
            },
            {
                "api_name": "Phone",
                "display_name": "Phone",
                "type": "phone",
                "default_value": ""
            },
            {
                "api_name": "Mobile",
                "display_name": "Mobile",
                "type": "phone",
                "default_value": ""
            }
        ]
    },
    {
        "type": "Related List", 
        "module": "Leads",
        "field_api_name": "tab_03",
        "fields":[
            {
                "api_name": "Mobile",
                "display_name": "Mobile",
                "type": "phone",
                "default_value": ""
            },
            {
                "api_name": "Fax",
                "display_name": "Fax",
                "type": "Phone",
                "default_value": ""
            },
            {
                "api_name": "Website",
                "display_name": "Website",
                "type": "url",
                "default_value": ""
            }
        ]
    }
]
// Sample Data
export const RecordDatas = {
    "tab_01": [
        {
            "id": "64895555494654654",
            "Account_Name": "Instaweb Works",
            "Phone": "8801718093390",
            "Mobile": "8801554309812",
            "Fax": "88031618527",
            "Website": "www.instawebworks.com.au",
        },
        {
            "id": "64892555464654654",
            "Account_Name": "inssssstaaaaaa",
            "Phone": "8801718093390",
            "Mobile": "8801554309812",
            "Fax": "88031618527",
            "Website": "www.instawebworks.com.au",
        },
        {
            "id": "64895555464674654",
            "Account_Name": "Instaweb Works",
            "Phone": "8801718093390",
            "Mobile": "8801554309812",
            "Fax": "88031618527",
            "Website": "www.instawebworks.com.au",
        },
        {
            "id": "64895555464634654",
            "Account_Name": "Instaweb Works",
            "Phone": "8801718093390",
            "Mobile": "8801554309812",
            "Fax": "88031618527",
            "Website": "www.instawebworks.com.au",
        },
        {
            "id": "64895555464654656",
            "Account_Name": "Instaweb Works",
            "Phone": "8801718093390",
            "Mobile": "8801554309812",
            "Fax": "88031618527",
            "Website": "www.instawebworks.com.au",
        }
    ],
    "tab_02": [
        {
            "id": "64895555494654654",
            "Account_Name": "facebook",
            "Phone": "8801718093390",
            "Mobile": "8801554309812",
            "Fax": "88031618527",
            "Website": "www.instawebworks.com.au",
        },
        {
            "id": "64892555464654654",
            "Account_Name": "Instaweb Works",
            "Phone": "8801718093390",
            "Mobile": "8801554309812",
            "Fax": "88031618527",
            "Website": "www.instawebworks.com.au",
        },
        {
            "id": "64895555464674654",
            "Account_Name": "Instaweb Works",
            "Phone": "8801718093390",
            "Mobile": "8801554309812",
            "Fax": "88031618527",
            "Website": "www.instawebworks.com.au",
        },
        {
            "id": "64895555464634654",
            "Account_Name": "Instaweb Works",
            "Phone": "8801718093390",
            "Mobile": "8801554309812",
            "Fax": "88031618527",
            "Website": "www.instawebworks.com.au",
        },
        {
            "id": "64895555464654656",
            "Account_Name": "Instaweb Works",
            "Phone": "8801718093390",
            "Mobile": "8801554309812",
            "Fax": "88031618527",
            "Website": "www.instawebworks.com.au",
        }
    ],
    "tab_03": [
        {
            "id": "64895555494654654",
            "Account_Name": "Instaweb Works",
            "Phone": "8801718093390",
            "Mobile": "8801554309812",
            "Fax": "88031618527",
            "Website": "www.instawebworks.com.au",
        },
        {
            "id": "64892555464654654",
            "Account_Name": "Instaweb Works",
            "Phone": "8801718093390",
            "Mobile": "8801554309812",
            "Fax": "88031618527",
            "Website": "www.instawebworks.com.au",
        },
        {
            "id": "64895555464674654",
            "Account_Name": "Instaweb Works",
            "Phone": "8801718093390",
            "Mobile": "8801554309812",
            "Fax": "88031618527",
            "Website": "www.instawebworks.com.au",
        },
        {
            "id": "64895555464634654",
            "Account_Name": "Instaweb Works",
            "Phone": "8801718093390",
            "Mobile": "8801554309812",
            "Fax": "88031618527",
            "Website": "www.instawebworks.com.au",
        },
        {
            "id": "64895555464654656",
            "Account_Name": "Instaweb Works",
            "Phone": "8801718093390",
            "Mobile": "8801554309812",
            "Fax": "88031618527",
            "Website": "www.instawebworks.com.au",
        }
    ]
}