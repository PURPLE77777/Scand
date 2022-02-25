const levelsData = {
    levels: [
        {
            title: "Level 1",
            requirements: [
                {
                    name: "Confirm E-mail",
                    status: true,
                },
                {
                    name: "Confirm Phone Number",
                    status: true,
                },
                {
                    name: "Enter personal details",
                    status: true,
                },
            ],
            turnover: "2.500",
            currency: "EUR",
        },
        {
            title: "Level 2",
            requirements: [
                {
                    name: "Upload Photo ID",
                    status: false,
                },
                {
                    name: "Upload Utility Bill",
                    status: false,
                },
            ],
            turnover: "30.000",
            currency: "EUR",
        },
    ],
};
export default levelsData;
