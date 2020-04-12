<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Comment;

class BlogCommentsController extends Controller
{
    public function index() {
        
    }

    public function store() {
        if (Auth::check()){
            $newcomment = new Comment();
            $newcomment->blogid = request('blogid');
            $newcomment->userid = Auth::User()->id; 

            $body = str_replace('"','%731%', request('commentbody'));
            $body2 = str_replace(array("\r", "\n"),'%732%', $body);
            $newcomment->comment = $body2;  
            
            $newcomment->save();
        }       
        $direction = '/blog/'.request('blogid').'#ComSection';
        return redirect($direction);
    }
}
