import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Batman' },
      { id: 12, name: 'Superman' },
      { id: 13, name: 'Wolverine' },
      { id: 14, name: 'Ironman' },
      { id: 15, name: 'Magneto' },
      { id: 16, name: 'Deadpool' },
      { id: 17, name: 'Colossus' },
      { id: 18, name: 'Silver surfer' },
      { id: 19, name: 'Storm' },
      { id: 20, name: 'Aquaman' }
    ];
    return {heroes};
  }
}