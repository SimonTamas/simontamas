<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class JustParkController extends Controller
{
    public function Start(Request $_request) {

        return view('justpark');

    }
}
