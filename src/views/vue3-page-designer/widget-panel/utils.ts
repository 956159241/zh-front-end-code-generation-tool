import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import { TColumnWidget } from '../type';

export const _cloneContainerWidget = (origin: any) => {
    let newWidget = _.cloneDeep(origin);
    const uuid = uuidv4();
    newWidget.id = uuid;
    newWidget.name = newWidget.type.replace(/-/g, '') + '-' + uuid;
    if (newWidget.type === 'row') {
        let newCol: TColumnWidget = {
            id: '',
            name: '',
            type: 'column',
            isContainer: true,
            widgets: [],
            span: 12,
            settings: {
                height: '100%',
                // ....
            }
        };
        let tmpId = uuidv4();
        newCol.id = tmpId;
        newCol.name = 'column-' + tmpId;
        newWidget.columns.push(newCol);

        newCol = _.cloneDeep(newCol);
        tmpId = uuidv4();
        newCol.id = tmpId;
        newCol.name = 'column-' + tmpId;
        newWidget.columns.push(newCol);
    } else if (newWidget.type === 'table') {
    } else if (newWidget.type === 'tab') {
    }
    return newWidget
};

export const _cloneCustomWidget = (origin: any) => {
    let newWidget = _.cloneDeep(origin);

    return newWidget;
};