import { assert } from 'chai';
import dayjs from 'dayjs';
import '../Test';
import {  load } from '../utils';

const { workingDays } = load('utils/dateUtils.js');

suite('Utils: workingDays');


before(async function () {});

test('include end date into range', async function () {
    const res = workingDays({
        from : dayjs.utc('01.01.2021', 'DD.MM.YYYY', true),
        to   : dayjs.utc('15.01.2021', 'DD.MM.YYYY', true)
    });

    assert.deepEqual(res.map(d => d.format('DD MMM (ddd)')), [
        '01 Jan (Fri)',
        '04 Jan (Mon)',
        '05 Jan (Tue)',
        '06 Jan (Wed)',
        '07 Jan (Thu)',
        '08 Jan (Fri)',
        '11 Jan (Mon)',
        '12 Jan (Tue)',
        '13 Jan (Wed)',
        '14 Jan (Thu)',
        '15 Jan (Fri)'
    ]);
});


after(async function () {});
