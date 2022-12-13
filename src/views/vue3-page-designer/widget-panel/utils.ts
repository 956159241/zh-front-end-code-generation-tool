import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import { TColumnWidget } from '../type';

export const _cloneContainerWidget = (origin: any) => {
    let newCon = _.cloneDeep(origin);
    const uuid = uuidv4();
    newCon.id = uuid;
    newCon.name = newCon.type.replace(/-/g, '') + '-' + uuid;
    if (newCon.type === 'row') {
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
        newCon.columns.push(newCol);

        newCol = _.cloneDeep(newCol);
        tmpId = uuidv4();
        newCol.id = tmpId;
        newCol.name = 'column-' + tmpId;
        newCon.columns.push(newCol);
    } else if (newCon.type === 'table') {
    } else if (newCon.type === 'tab') {
    }
    return newCon
};