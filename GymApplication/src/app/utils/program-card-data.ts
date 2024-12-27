import { ProgramCard } from '../models/program-card.model';

export class ProgramCardData {
  static getCards(): ProgramCard[] {
    return [
      new ProgramCard(
        'Cardio Strength',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.',
        'icons/cardimg1.png'
      ),
      new ProgramCard(
        'Fat Lose',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.',
        'icons/cardimg3.png'
      ),
      new ProgramCard(
        'Muscle Gain',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.',
        'icons/cardimg3.png'
      ),
      new ProgramCard(
        'Nutritions',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.',
        'icons/cardimg4.png'
      ),
      new ProgramCard(
        'Muscle Gain',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.',
        'icons/cardimg3.png'
      ),
      new ProgramCard(
        'Nutritions',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.',
        'icons/cardimg4.png'
      )
    ];
  }
}
