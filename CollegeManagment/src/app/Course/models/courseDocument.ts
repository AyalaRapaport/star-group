export class CourseDocument {
    constructor(
        public document_id?: string,
        public course_id?: string,
        public document_name?: string,
        public document_type?: string,
        public document_url?: string,
        public uploaded_at?: Date
    ) {}
}