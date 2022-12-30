export const formFields = {
  title: "",
  showEndLine: true,
  elements: [
    {
      type: "group",
      title: "Input",
      showLine: true,
      className: "customCssClass",
    },
    {
      name: "text",
      label: "input box",
      type: "text",
      props: {
        required: true,
        disabled: true,
      },
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      default: "Default value",
      placeholder: "Text input",
    },
    {
      name: "dependentText",
      label: "Dependent Text",
      type: "text",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      props: {
        required: true,
      },
      placeholder: "Text input",
      showOn: "text",
      showOnValue: (dependentFieldValue = "") => {
        return dependentFieldValue.length >= 2;
      },
      dependentOn: "", // dependent parent field
      getOnDependency: async (dependentValue, fieldRef) => {
        //console.log("getOnDependency dependentValue = ", dependentValue);
        // call your respective api's if needed and set the dependent field value with below function
        fieldRef.current.setValue(dependentValue);
      },
    },
    {
      name: "number",
      label: "dfghjk",
      type: "number",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      props: {
        required: false,
      },
      default: "",
      placeholder: "Number Input",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      props: {
        required: true,
      },
      default: "",
      placeholder: "Email Input",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
    },
    {
      type: "group",
      title: "Date",
    },
    {
      name: "date",
      label: "Date",
      type: "date",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      props: {
        required: true,
      },
      default: "",
      placeholder: "Date input",
    },
    {
      type: "group",
      title: "Select",
    },
    {
      name: "select",
      label: "Select",
      type: "select",
      props: {
        required: true,
      },
      default: "yellow",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      placeholder: "Select One",
      options: [
        { value: "ocean", label: "Ocean" },
        { value: "blue", label: "Blue" },
        { value: "purple", label: "Purple" },
        { value: "red", label: "Red" },
        { value: "orange", label: "Orange" },
        { value: "yellow", label: "Yellow" },
        { value: "green", label: "Green" },
        { value: "forest", label: "Forest" },
        { value: "slate", label: "Slate" },
        { value: "silver", label: "Silver" },
      ],
    },
    {
      name: "selectapi",
      label: "Select API",
      type: "select",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      props: {
        required: true,
      },
      getData: async () => {
        return await fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            return response.json();
          })
          .then((responseData) => {
            return responseData.map((resp, index) => {
              return {
                value: resp.id,
                label: resp.name,
              };
            });
          });
      },
    },
    {
      name: "dependentselect",
      label: "Dependent Select API",
      type: "select",
      props: {
        required: true,
        disabled: true,
      },
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      placeholder: "Select dependent field",
      dependentOn: "selectapi",
      getOnDependency: async (dependentValue, fieldRef) => {
        //console.log("getOnDependency dependentValue = ", dependentValue);
        if (dependentValue) {
          const options = await fetch(
            `https://jsonplaceholder.typicode.com/users/${dependentValue}/todos`
          )
            .then((response) => {
              return response.json();
            })
            .then((responseData) => {
              return responseData.map((resp) => {
                return {
                  value: resp.id,
                  label: resp.title,
                };
              });
            });
          fieldRef.current.setOptions(options);
          //`if dependent field has static options values this setOptions is not needed`;
          fieldRef.current.setValue();
          //`Default value to be selected in dependent dropdown , value should equal to value tag of option  {value:"",label:""}`;
        }
      },
    },
    {
      name: "multiselect",
      label: "Multi Select",
      type: "select",
      props: {
        multi: true,
        required: true,
      },
      default: "yellow",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      placeholder: "Select One",
      options: [
        { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
        { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
        { value: "purple", label: "Purple", color: "#5243AA" },
        { value: "red", label: "Red", color: "#FF5630", isFixed: true },
        { value: "orange", label: "Orange", color: "#FF8B00" },
        { value: "yellow", label: "Yellow", color: "#FFC400" },
        { value: "green", label: "Green", color: "#36B37E" },
        { value: "forest", label: "Forest", color: "#00875A" },
        { value: "slate", label: "Slate", color: "#253858" },
        { value: "silver", label: "Silver", color: "#666666" },
      ],
    },
    {
      name: "toggleme",
      label: "Toggle Me",
      type: "toggle",
      default: "ON",
      options: {
        valueOn: "ON",
        valueOff: "OFF",
      },
    },
    {
      type: "group",
      title: "Checkbox",
    },
    {
      name: "checkbox",
      label: "Checkbox",
      type: "checkbox",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      props: {
        required: true,
      },
      value: "YES",
      placeholder: "Checkbox",
    },

    {
      type: "checkbox-group",
      name: "checkboxGroup",
      label: "Checkbox Group",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      props: {
        required: true,
      },
      options: [
        {
          name: "option-yes",
          value: "YES",
          label: "Option YES",
        },
        {
          name: "option-no",
          value: "NO",
          label: "Option NO",
        },
      ],
    },
    {
      type: "checkbox-group",
      name: "checkboxGroupPro",
      label: "Checkbox Group With more than 2 option",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      props: {
        required: true,
      },
      options: [
        {
          name: "option-yes",
          value: "YES",
          label: "Option YES",
        },
        {
          name: "option-no",
          value: "NO",
          label: "Option NO",
        },
        {
          name: "option-maybe",
          value: "Maybe",
          label: "Option Maybe",
        },
      ],
    },
    {
      type: "group",
      title: "Radio",
    },
    {
      type: "radio",
      name: "radioGroup",
      label: "Radio With more than 2 Options",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      props: {
        required: true,
      },
      options: [
        {
          name: "option-yes",
          value: "YES",
          label: "Option YES",
        },
        {
          name: "option-no",
          value: "NO",
          label: "Option NO",
        },
      ],
    },
    {
      type: "radio",
      name: "radioGroup_pro",
      label: "Radio With more than 2 Options",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      props: {
        required: true,
      },
      options: [
        {
          name: "option-yes",
          value: "YES",
          label: "Option YES",
        },
        {
          name: "option-no",
          value: "NO",
          label: "Option NO",
        },
        {
          name: "option-maybe",
          value: "Maybe",
          label: "Option Maybe",
        },
      ],
    },
    {
      name: "selectName",
      label: "Name Select",
      type: "select",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      isInfinite: true,
      props: {
        infiniteLoad: true,
      },
      getData: async (data = null, scrollNumber = 0, perScrollCount = 10) => {
        let searchObj = {};
        searchObj["name"] = data;
        let searchFields = "";
        if (data) {
          searchFields = "searchQuery=" + JSON.stringify(searchObj);
        }
        return await fetch(
          encodeURI(
            `http://test.com?pageNumber=${scrollNumber}&perPageCount=${perScrollCount}&${searchFields}`
          )
        )
          .then((response) => {
            return response.json();
          })
          .then((responseData) => {
            if (responseData && responseData["data"]) {
              return responseData["data"].map((resp, index) => {
                return {
                  value: resp.id,
                  label: resp.name,
                };
              });
            } else {
              return [];
            }
          });
      },
    },
    {
      name: "File",
      label: "File",
      type: "file",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      props: {
        required: true,
        disabled: true,
      },
      default: "Default value",
      placeholder: "Text input",
    },

    //date picker
    {
      name: "date",
      label: "Date",
      type: "date",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      props: {
        required: true,
        disabled: false,
        pickerType: "date",
      },
      default: "",
      dateFormat: "MM/dd/yyyy",
      placeholder: "Date input",
    },

    //time picker
    {
      name: "dateTime",
      label: "Time picker",
      type: "date",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      props: {
        required: true,
        disabled: false,
        pickerType: "time",
      },
      default: "",
      dateFormat: "HH:mm",
      timeIntervals: "30",
      placeholder: "Date input",
    },

    //date-picker

    {
      name: "datetimepicker",
      label: "Date Time",
      type: "date",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      props: {
        required: true,
        disabled: false,
        pickerType: "date-time",
      },
      default: "",
      dateFormat: "MM/dd/yyyy HH:mm",
      timeIntervals: "30",
      placeholder: "Date input",
    },

    {
      name: "year",
      label: "Year",
      type: "date",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      props: {
        required: true,
        disabled: false,
        pickerType: "year",
        formatOutput: true,
      },
      default: "",
      dateFormat: "yyyy",
      placeholder: "Date input",
    },

    //page div

    {
      type: "group",
      title: "Section A",
      showLine: true,
    },
    {
      name: "field 1",
      label: "Select Independent API",
      type: "select",
      default: 3,
      props: {
        required: true,
      },
    },
    {
      name: "field 2",
      label: "Dependent Text API",
      type: "text",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      props: {
        required: true,
      },
      placeholder: "Input dependent field",
      dependentOn: "newselectapi",
    },
    {
      type: "group",
      title: "Section B",
      showLine: false,
    },
    {
      name: "selectapi",
      label: "Select API",
      type: "select",
      width: {
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      },
      props: {
        required: true,
      },
    },
    {
      name: "dependentselect",
      label: "Dependent Select API",
      type: "select",
      props: {
        required: true,
      },
      placeholder: "Select dependent field",
      dependentOn: "selectapi",
    },
  ],
};
