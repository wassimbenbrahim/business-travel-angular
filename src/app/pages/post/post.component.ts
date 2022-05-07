import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/Constructor/Posts';
import { PostsService } from 'src/app/SERVICE/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService : PostsService ) { }
  
  listPosts : Posts[];

  ngOnInit(): void {
    this.reloadData();
  }

    reloadData(){
      this.postService.getAllPosts().subscribe
    (res=>{console.log(res); this.listPosts=res}
    );
    }

    deletePost(idPost: number) {
      this.postService.deletePost(idPost)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }


    

    
  
 

}
