export class Article {

  title: string;
  subtitle?: string;
  description: string;
  links: string[];

  private constructor() {
  }

  static createArticle(
    { title, subtitle, description, links }: { title: string, subtitle?: string, description: string, links: string[] }
  ): Article {
    const article = new Article();
    article.title = title;
    article.subtitle = subtitle;
    article.description = description;
    article.links = links;
    return article;
  }
}
