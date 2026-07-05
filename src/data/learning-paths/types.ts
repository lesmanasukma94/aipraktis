export interface LearningPathStep {
  slug: string;
  title: string;
}

export interface LearningPath {

  slug: string;

  title: string;

  description: string;

  category: string;

  steps: LearningPathStep[];

}