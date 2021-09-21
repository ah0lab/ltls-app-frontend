import { Tip } from './tip';
import { TIP_CATEGORY} from './tip-category';

export class TipRepository
{
  static GetTips(): Tip[] {
    return new Array<Tip>(
{
        Category: TIP_CATEGORY.APP,
        Text: 'This is an app tip!'
      },
      {
        Category: TIP_CATEGORY.APP,
        Text: 'This is another app tip!'
      },
      {
        Category: TIP_CATEGORY.PARENT,
        Text: 'This is a tip for a parent!'
      },
      {
        Category: TIP_CATEGORY.HEARING,
        Text: 'This is a hearing tip!'
      });
  }
}
