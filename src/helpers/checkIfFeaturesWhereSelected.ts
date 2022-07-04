import { omit, omitBy, isNil, values, isEmpty } from 'lodash';

const checkIfFeaturesWhereSelected = (detalles: any, formValues: any) => {
    const hasDetails = detalles !== null;
    const details = hasDetails && JSON.parse(detalles);
    const omittedDetailsKeys = Object.keys(
        omitBy(details, (value) => !isNil(value))
    );
    const finalFormValues = omit(formValues, omittedDetailsKeys);
    const isFeaturesSelected = values(finalFormValues).every(
        (value) => !isEmpty(value)
    );
    return { isFeaturesSelected, finalFormValues };
};

export default checkIfFeaturesWhereSelected;
