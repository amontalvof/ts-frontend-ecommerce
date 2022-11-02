import { omit, omitBy, isNil, values, isEmpty } from 'lodash';

const checkIfFeaturesWhereSelected = (
    detalles: any,
    formValues: any,
    areShoes: boolean
) => {
    const hasDetails = !!detalles;
    const details = hasDetails && JSON.parse(detalles);
    const omittedDetailsKeys = Object.keys(
        omitBy(details, (value) => !isNil(value))
    );
    const finalFormValues = omit(formValues, omittedDetailsKeys);
    const isFeaturesSelected = areShoes
        ? values(finalFormValues).every((value) => !isEmpty(value))
        : true;
    return { isFeaturesSelected, finalFormValues };
};

export default checkIfFeaturesWhereSelected;
