import React, { useRef, forwardRef, useImperativeHandle } from "react";
import Wizard from "@oneui/react-components/src/components/Wizard";
import "@oneui/6d-base-theme/lib/theme.css";
/*Below import is of compressed theme css file*/
import "@oneui/6d-base-theme";

const DComponent = () => {
    const ref = useRef();
const DummyComponent = forwardRef(({text},ref) => {
    useImperativeHandle(ref, () => ({
      validate: async () => {
        //this method will be called on click of next
        console.log('validating');
        return true;//return false to stop wizard from going forward
      }
    }));
    return (<div>test component {text}</div>)
});

  return (
    <div>
      <Wizard
              ref={ref}
              header='Test'
              validate={true}
              customClass="app-wizard"
              showDefaultButtons={true}
              list={[{
                title : 'Supplier Details',
                props: {
                  text : 'Supplier'
                },
                component : DummyComponent,
                cancelButtonText: "cancel",
                previousButtonText: "previous",
                nextButtonText: "next"
              },{
                title : 'Paired Details',
                props: {
                  text : 'Paried'
                },
                component : DummyComponent,
                cancelButtonText: "CANCEL",
                previousButtonText: "PREVIOUS",
                nextButtonText: "NEXT"
              },{
                title : 'Unpaired Details',
                props: {
                  text : 'UnPaired'
                },
                component : DummyComponent,
                cancelButtonText: "Cancel",
                previousButtonText: "Previous",
                nextButtonText: "Next",
              }]}
              onCancel={(reason)=>{
                console.log(reason);
              }}
              onClose={() => {
                console.log('on Close');
              }}
            />
    </div>
  );
            };
 export default DComponent;