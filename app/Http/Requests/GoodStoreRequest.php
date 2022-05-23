<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GoodStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'string|required|unique:goods,name',
            'price' => 'required|numeric|min:99'
        ];
    }

    public function messages() {
        return [
            'name.unique' => 'Название должно быть уникальным',
            'name.required' => 'Укажите название',
            'name.string' => 'Название должно быть строкой',
            'price.min' => 'Минимальная цена - 99',
            'price.required' => 'Укажите цену',
        ];
    }
}
