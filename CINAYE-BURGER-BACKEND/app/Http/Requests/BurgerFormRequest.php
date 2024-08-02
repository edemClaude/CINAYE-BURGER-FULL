<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BurgerFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|unique:burgers,name',
            'price' => 'required|numeric',
            'description' => 'required|max:1000',
            'image' => 'required|string'
        ];
    }
}
