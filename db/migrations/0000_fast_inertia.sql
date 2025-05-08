CREATE TABLE "customerdata" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "customerdata_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"firstName" varchar,
	"lastName" varchar,
	"companyName" varchar,
	"address" varchar,
	"phoneNumber" varchar,
	"customerRequirment" varchar,
	"email" varchar,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp
);
