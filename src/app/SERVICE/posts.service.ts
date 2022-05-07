import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../Constructor/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  urlapi="http://localhost:8081/SpringMVC/post/retrive-posts";
  urlapii="http://localhost:8081/SpringMVC/post/remove-post/"

  constructor(private http: HttpClient) { }

  getAllPosts() : Observable<Posts[]> {
    return this.http.get<Posts[]>(this.urlapi);

  }
  public deletePost(idPost:number){
    return this.http.delete("http://localhost:8081/SpringMVC/post/remove-post/" +idPost);

 }
 updatePost(idPost: number, value: any): Observable<any> {
  return this.http.put("", value,);
}



}
