import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'article-description',
    templateUrl: 'article-description.component.html',
    styleUrls: ['article-description.component.scss']
})
export class ArticleDescriptionComponent implements OnInit {

    @Input() description: string;
    filteredDescription: string;
    characters: number = 500;

    ngOnInit() {
        this.filteredDescription = this.description.substr(0, 250);        
    }

    readMore() {
        this.filteredDescription = this.description.substr(0, this.characters);
        this.characters = this.characters + 250;
    }
}
