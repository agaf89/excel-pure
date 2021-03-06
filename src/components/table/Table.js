import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

import {handleResize} from './table.resize';
import {shouldResize} from './table.functions';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable(25);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      handleResize(event, this.$root);
    }
  }
}
