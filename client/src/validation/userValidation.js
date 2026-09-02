export const userValidation = {
    name: {
        required: "Name is required",
        minLength: {
            value: 3,
            message: "Name must be at least 3 characters"
        },
        pattern: {
            value: /^[A-Za-z ]+$/,
            message: "Name can contain only letters"
        }
    },

    email: {
        required: {
            value: true,
            message: "Email is Required",
        },
        maxLength: {
            value: 30,
            message: "Email must not be above 30 letters",
        },
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter a valid email address",
        },
    },

    phoneNumber: {
        required: {
            value: true,
            message: "phone number is required",
        },
        maxLength: {
            value: 10,
            message: "Phone Number in not Excced 10 digits.",
        },
        pattern: {
            value: /^\d{10}$/,
            message: "Invalid Number Please Enter Valid Number",
        },
    },

    gender: {
        required: "Gender is required"
    },

    status: {
        required: "Status is required"
    }
};