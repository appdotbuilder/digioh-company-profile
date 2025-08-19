<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()?->isEditor() ?? false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'icon' => 'nullable|string|max:255',
            'description' => 'required|string|max:1000',
            'full_description' => 'nullable|string',
            'gallery' => 'nullable|array',
            'gallery.*' => 'string',
            'status' => 'required|in:draft,published,scheduled',
            'published_at' => 'nullable|date|after:now',
            'seo_title' => 'nullable|string|max:60',
            'seo_description' => 'nullable|string|max:160',
            'seo_keywords' => 'nullable|string|max:255',
            'og_image' => 'nullable|string|max:255',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'title.required' => 'Service title is required.',
            'description.required' => 'Service description is required.',
            'status.required' => 'Status is required.',
            'status.in' => 'Status must be draft, published, or scheduled.',
        ];
    }
}